import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HTTPService {

    private scoreUrl = 'https://staging-api.lejour.com.br/portal/api/v2/nps/';

    constructor(private http: HttpClient) { }

    post(body: object, operation: string): Observable<any> {
        console.log('body sendo enviado');
        console.log(body);
        return this.http.post<any>(this.scoreUrl, body, httpOptions).pipe(
            tap(response => response),
            catchError(this.handleError<any>(operation))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

}

