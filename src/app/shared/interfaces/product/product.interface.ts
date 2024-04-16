import { ICategoryResponse } from "../category/category.interface";

export interface IProductsRequest {
	category: ICategoryResponse;
	name: string;
	path: string;
	description: string;
	productSize: string;
	weight: string;
	price: number;
	imagePath: string;
	count: number;
}

export interface IProductsResponse extends IProductsRequest {
	id: number;
}