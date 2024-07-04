import { Injectable } from '@angular/core';
import { IDiscountRequest, IDiscountResponse } from '../../interfaces/discount/discount.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  Firestore,
  CollectionReference,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc, docData
} from "@angular/fire/firestore";
import { DocumentData, collection } from "@firebase/firestore"

@Injectable({
  providedIn: 'root'
})

export class DiscountService {

  private url = environment.BACKEND_URL;
  private api = { discounts: `${this.url}/discounts` }
  private discountCollection!: CollectionReference<DocumentData>;
  
  constructor(private http: HttpClient,
    private afs: Firestore,
    ) {  
    this.discountCollection = collection(this.afs, 'discounts');
  }


  // getAll(): Observable<IDiscountResponse[]> {
  //   return this.http.get<IDiscountResponse[]>(this.api.discounts);
  // }

  // getOne(id: number): Observable<IDiscountResponse> {
  //   return this.http.get<IDiscountResponse>(`${this.api.discounts}/${id}`);
  // }

  // create(discount: IDiscountRequest): Observable<IDiscountResponse> {
  //   return this.http.post<IDiscountResponse>(this.api.discounts, discount);
  // }

  // update(discount: IDiscountRequest, id: number): Observable<IDiscountResponse> {
  //   return this.http.patch<IDiscountResponse>(`${this.api.discounts}/${id}`, discount);
  // }

  // delete(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.api.discounts}/${id}`);
  // }

  /////-----------------------------------

  getAllFirebase() {
    return collectionData(this.discountCollection, { idField: 'id' });
  }

  getOneFirebase(id: string) {
    const discountDocumentReference = doc(this.afs, `discounts/${id}`);
    return docData(discountDocumentReference, { idField: 'id' });
  }

  createFirebase(discount: IDiscountRequest) {
    return addDoc(this.discountCollection,discount);
  }

  updateFirebase(discount: IDiscountRequest, id: string) {
    const discountDocumentReference = doc(this.afs, `discounts/${id}`);
    return updateDoc(discountDocumentReference, {...discount});
  }

  deleteFirebase(id: string) {
    const discountDocumentReference = doc(this.afs, `discounts/${id}`);
    return deleteDoc(discountDocumentReference);
  }
}
