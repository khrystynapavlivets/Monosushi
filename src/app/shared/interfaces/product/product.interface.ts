import { ICategoryResponse } from "../category/category.interface";

export interface IProductsRequest {
	category: ICategoryResponse;
	title: string;
	path: string;
	description: string;
	productSize: string;
	price: number;
	imagePath: string;
	count: number;
}

export interface IProductsResponse extends IProductsRequest {
name: any;
weight: any;
	id: number;
}