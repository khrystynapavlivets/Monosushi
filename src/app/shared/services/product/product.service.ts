import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IProductsRequest, IProductsResponse } from '../../interfaces/product/product.interface';
import {
  collectionData,
  CollectionReference,
  doc,
  docData,
  Firestore,
  getDocs,
  query,
  updateDoc,
  where,
} from "@angular/fire/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  DocumentData,
} from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.BACKEND_URL;
  private api = { products: `${this.url}/products` };
  private productCollection!: CollectionReference<DocumentData>;
  
  constructor(private http: HttpClient,
    private afs: Firestore,
    ) {  
    this.productCollection = collection(this.afs, 'products');
  }


  // getAll(): Observable<IProductsResponse[]> {
  //   return this.http.get<IProductsResponse[]>(this.api.products);
  // }

  // getAllByCategory(name: string): Observable<IProductsResponse[]> {
  //   return this.http.get<IProductsResponse[]>(`${this.api.products}?category.path=${name}`);
  // }

  // getOne(id: number): Observable<IProductsResponse> {
  //   return this.http.get<IProductsResponse>(`${this.api.products}/${id}`);
  // }

  // create(product: IProductsRequest): Observable<IProductsResponse> {
  //   return this.http.post<IProductsResponse>(this.api.products, product);
  // }

  // update(product: IProductsRequest, id: number): Observable<IProductsResponse> {
  //   return this.http.patch<IProductsResponse>(`${this.api.products}/${id}`, product);
  // }

  // delete(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.api.products}/${id}`);
  // }

  ////------------------------------------

  getAllFirebase() {
    return collectionData(this.productCollection, { idField: 'id' });
  }

  async getAllByCategoryFirebase(name: string): Promise<IProductsResponse[]> {
    const arr: IProductsResponse[] = [];
    const category = query(
      collection(this.afs, 'products'),
      where('category.path', '==', `${name}`)
    );
    const querySnapshot = await getDocs(category);
    querySnapshot.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id } as IProductsResponse);
    });
    return arr;
  }
  
  getOneFirebase(id: string) {
    const productDocumentReferencee = doc(this.afs, `products/${id}`);
    return docData(productDocumentReferencee, { idField: 'id' });
  }

  createFirebase(product:IProductsRequest) {
    return addDoc(this.productCollection,product);
  }

  updateFirebase(product: IProductsRequest, id: string) {
    const productDocumentReferencee = doc(this.afs, `products/${id}`);
    return updateDoc(productDocumentReferencee, {...product});
  }

  deleteFirebase(id: string) {
    const productDocumentReferencee = doc(this.afs, `products/${id}`);
    return deleteDoc(productDocumentReferencee);
  }

}