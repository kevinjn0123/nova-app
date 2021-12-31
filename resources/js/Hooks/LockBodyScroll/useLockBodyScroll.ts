import { useState, useLayoutEffect } from "react";
// Usage
// function App() {
//     // State for our modal
//     const [modalOpen, setModalOpen] = useState<boolean>(false);
//     return (
//         <div>
//             <button onClick={() => setModalOpen(true)}>Show Modal</button>
//     <Content />
//     {modalOpen && (
//         <Modal
//             title="Try scrolling"
//     content="I bet you you can't! Muahahaha 😈"
//     onClose={() => setModalOpen(false)}
//     />
// )}
//     </div>
// );
// }
// // Define modal props type
// type ModalProps = {
//     title: string;
//     content: string;
//     onClose: () => void;
// }
// function Modal({ title, content, onClose } : ModalProps) {
//     // Call hook to lock body scroll
//     useLockBodyScroll();
//     return (
//         <div className="modal-overlay" onClick={onClose}>
//     <div className="modal">
//         <h2>{title}</h2>
//         <p>{content}</p>
//         </div>
//         </div>
// );
// }
// // Hook
export function useLockBodyScroll(): void {
    // useLaoutEffect callback return type is "() => void" type
    useLayoutEffect(() : () => void => {
        // Get original body overflow
        const originalStyle: string = window.getComputedStyle(document.documentElement).overflow;
        // Prevent scrolling on mount
        document.documentElement.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return () => (document.documentElement.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
}
