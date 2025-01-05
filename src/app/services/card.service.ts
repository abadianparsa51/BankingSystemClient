import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    cardDetailUrl = "CardDetail/user-cards";
    addCardUrl = "CardDetail/add";
    editCardUrl = "CardDetail/update";  // Update URL for Edit
    deleteCardUrl = "CardDetail/delete"; // Delete URL for Delete

    constructor(private http: HttpClient) { }

    // Get user card details
    public GetUserCardDetail(): Observable<any> {
        return this.http.get<any>(`${environment.apiBaseUrl}/${this.cardDetailUrl}`);
    }

    // Add a new card
    public AddUserCardDetail(cardData: any): Observable<any> {
        return this.http.post<any>(`${environment.apiBaseUrl}/${this.addCardUrl}`, cardData);
    }

    // Edit an existing card
    public EditUserCardDetail(id: number, cardData: any): Observable<any> {
        return this.http.put<any>(`${environment.apiBaseUrl}/${this.editCardUrl}/${id}`, cardData);
    }

    // Delete a user card by ID
    public DeleteUserCardDetail(id: number,): Observable<any> {
        return this.http.delete<any>(`${environment.apiBaseUrl}/${this.deleteCardUrl}/${id}`);
    }
}
