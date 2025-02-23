import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  // Si un token est trouvé, on ajoute l'en-tête Authorization
  if (token) {
    const clonedRequest = req.clone({
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    });
    return next(clonedRequest);  // Passer la requête modifiée
  }

  // Sinon, on continue avec la requête d'origine sans modification
  return next(req);
};
