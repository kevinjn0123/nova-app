/**
 * Find the position of [element] in [nodeList].
 * @returns an index of the match, or -1 if there is no match
 */
function positionInNodeList(element: any, nodeList: any) {
    for (let i = 0; i < nodeList.length; i++) {
        if (element === nodeList[i]) {
            return i;
        }
    }
    return -1;
}

/**
 * For a provided node, find the appropriate container/node couple so that
 * container.contains(node) and a CSS selector can be created from the
 * container to the node.
 */
function findNodeAndContainer(node: any) {
    const shadowRoot = node.containingShadowRoot;
    while (node?.isNativeAnonymous) {
        node = node.parentNode;
    }

    if (shadowRoot) {
        // If the node is under a shadow root, the shadowRoot contains the node and
        // we can find the node via shadowRoot.querySelector(path).
        return {
            containingDocOrShadow: shadowRoot,
            node,
        };
    }

    // Otherwise, get the root binding parent to get a non anonymous element that
    // will be accessible from the ownerDocument.
    return {
        containingDocOrShadow: node.ownerDocument,
        node,
    };
}

/**
 * Find a unique CSS selector for a given element
 * @returns a string such that:
 *   - ele.containingDocOrShadow.querySelector(reply) === ele
 *   - ele.containingDocOrShadow.querySelectorAll(reply).length === 1
 */
export const findCssSelector = function(ele: any) {
    const { node, containingDocOrShadow } = findNodeAndContainer(ele);
    ele = node;

    if (!containingDocOrShadow || !containingDocOrShadow.contains(ele)) {
        // findCssSelector received element not inside container.
        return '';
    }

    const cssEscape = escape;

    // document.querySelectorAll("#id") returns multiple if elements share an ID
    if (
        ele.id &&
        containingDocOrShadow.querySelectorAll('#' + cssEscape(ele.id)).length === 1
    ) {
        return '#' + cssEscape(ele.id);
    }

    // Inherently unique by tag name
    const tagName = ele.localName;
    if (tagName === 'html') {
        return 'html';
    }
    if (tagName === 'head') {
        return 'head';
    }
    if (tagName === 'body') {
        return 'body';
    }

    // We might be able to find a unique class name
    let selector: any, index, matches;
    for (let i = 0; i < ele.classList.length; i++) {
        // Is this className unique by itself?
        selector = '.' + cssEscape(ele.classList.item(i));
        matches = containingDocOrShadow.querySelectorAll(selector);
        if (matches.length === 1) {
            return selector;
        }
        // Maybe it's unique with a tag name?
        selector = cssEscape(tagName) + selector;
        matches = containingDocOrShadow.querySelectorAll(selector);
        if (matches.length === 1) {
            return selector;
        }
        // Maybe it's unique using a tag name and nth-child
        index = positionInNodeList(ele, ele.parentNode.children) + 1;
        selector = selector + ':nth-child(' + index + ')';
        matches = containingDocOrShadow.querySelectorAll(selector);
        if (matches.length === 1) {
            return selector;
        }
    }

    // Not unique enough yet.
    index = positionInNodeList(ele, ele.parentNode.children) + 1;
    selector = cssEscape(tagName) + ':nth-child(' + index + ')';
    if (ele.parentNode !== containingDocOrShadow) {
        selector = findCssSelector(ele.parentNode) + ' > ' + selector;
    }
    return selector;
};


// @ts-ignore
const parentElements = (element, includeCssId = false) => {
    const parents = [];
    while (element) {
        const tagName = element.nodeName.toLowerCase();
        const cssId = element.id ? `#${element.id}` : '';
        let cssClass = '';
        if (element.className && typeof element.className === 'string') {
            // escape class names
            cssClass = `.${element.className
                .replace(/\s+/g, '.')
                .replace(/[:*+?^${}()|[\]\\]/gi, '\\$&')}`;
        }

        parents.unshift({
            element,
            selector: includeCssId ? tagName + cssId + cssClass : tagName + cssClass,
        });

        element = element.parentNode !== document ? element.parentNode : false;
    }

    return parents;
};

export { parentElements };

const nthElement = (element: any, sameType = true) => {
    let c = element;
    let nth = 1;
    while (c.previousElementSibling !== null) {
        if (!sameType || c.previousElementSibling.nodeName === element.nodeName) {
            nth++;
        }
        c = c.previousElementSibling;
    }

    return nth;
};

export { nthElement };

const nthSelectorNeeded = (selector: any, path: any) => {
    const querySelector = path === '' ? selector : `${path} > ${selector}`;
    return document.querySelectorAll(querySelector).length > 1;
};

const buildPathString = (parents: any) => {
    const pathArr: any = [];

    parents.forEach((parent: any) => {
        if (nthSelectorNeeded(parent.selector, pathArr.join(' > '))) {
            parent.selector += `:nth-of-type(${nthElement(parent.element)})`;
        }
        pathArr.push(parent.selector);
    });

    return pathArr.join(' > ');
};

const domElementPath = (element: any, includeCssId = false) => {
    if (!(element instanceof HTMLElement)) {
        throw new Error('element must be of type `HTMLElement`.');
    }

    return buildPathString(parentElements(element, includeCssId));
};

export { domElementPath };
