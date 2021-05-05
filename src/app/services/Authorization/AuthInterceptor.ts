import { HttpEvent } from "@angular/common/http";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const currenUser = localStorage.getItem("currentUser");

        if (currenUser) {
            console.log(JSON.stringify(currenUser));
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + currenUser["token"])
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}