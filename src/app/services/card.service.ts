import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    cardDetailUrl = "CardDetail/user-cards"
    addCardlUrl = "CardDetail/add"
    constructor(private http: HttpClient) { }

    public GetUserCardDetail(): Observable<any> {
        return this.http.get<any>(`${environment.apiBaseUrl}/${this.cardDetailUrl}`);
    }
    public AddUserCardDetail(cardData: any): Observable<any> {
        return this.http.post<any>(`${environment.apiBaseUrl}/CardDetail/add`, cardData);
    }
}
