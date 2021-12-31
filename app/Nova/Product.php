<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Currency;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use OptimistDigital\MultiselectField\Multiselect;

class Product extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Product::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';


    //

    /**
     * The id of viewing product.
     *
     * @var string
     */
    public function product_id()
    {
        return $this->id;
    }

    //

    /**
     * Get the search result subtitle for the resource.
     *
     * @return string
     */
    public function subtitle()
    {
        return "Price: {$this->base_price}, ID: {$this->id}";
    }

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id', 'name'
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make(__('ID'), 'id')->sortable(),

            Image::make('Image Path')->disk('public')->path('product_images')
                ->thumbnail(function ($value, $disk) {
                    return $value
                        ? Storage::disk($disk)->url($value)
                        : null;
                }),

            Text::make('Name')
                ->sortable()
                ->rules('required', 'max:255'),

            Textarea::make('Description'),

            Number::make('Quantity')->min(1)->max(100)->step(1)->default(1)->rules('required'),
            Number::make('Base_Price')->min(0)->max(1000)->step(0.01)->default(0.00)->rules('required'),
            Number::make('Sale_Price')->min(0)->max(1000)->step(0.01)->default(null),

            Text::make('Currency')
                ->sortable()
                ->default('USD')
                ->rules('required', 'max:255'),
//
//            Select::make('Category')
//                ->options(Category::all()->map(function ($cat) {
//                    return $cat->name;
//                }))
//                ->nullable(),

//            Multiselect::make('Category')->asyncResource(Category::class),
//            BelongsToMany::make('Categories', 'categories', Category::class),
            BelongsToMany::make('Categories')->fields(new ProductCategoryFields())->searchable(function ($request) {
                return true;
            }),
//            Select::make('Product Category')->options(['1' => 'Enabled', '0' => 'Disabled'])->displayUsingLabels()->resolveUsing(function ($active) {
//                return (string) $active;
//            })->nullable(),
//            Multiselect::make('Product Categories')->options(
//                Product::find($this->product_id())->categories->map(function ($category) {
//                    return collect([$category->slug => $category->name])->implode(',');
//                })
//            ),


            Text::make('Categories')->resolveUsing(function () {
                if($this->id !== null){
                    return Product::find($this->id)->categories->map(function ($categories) {
                        return $categories->name;
                    })->implode(', ');
                } else {
                    return null;
                }
            })->hideWhenCreating()->hideWhenUpdating(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
