import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICatImage} from "../interfaces/cat-image.interface";
import {IBreeds} from "../interfaces/breeds.interface";
import {IImagesFilterForm} from "../interfaces/images-filter-form.interface";

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  private API_KEY = 'live_scBiqBB2P10YUSe7SgnR05dfcHb3Fhjn6Cl8ybTfxu5oDMv6RgeOOT95fQfoqpqL';
  private ROOT_URL = `https://api.thecatapi.com/v1/images/search?api_key=${this.API_KEY}`;
  private BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
  private CURRENT_IMG_URL = 'https://api.thecatapi.com/v1/images';
  private defaultParams: IImagesFilterForm = {
    limit: 10
  }

  constructor(private http: HttpClient) {}

  public getAllCatsImage(formData: IImagesFilterForm = this.defaultParams): Observable<ICatImage[]> {
    let params = new HttpParams();
    if (formData.limit) params = params.append('limit', formData.limit);
    if (formData.order) params = params.append('order', formData.order);
    if (formData.breed_ids) params = params.append('breed_ids', formData.breed_ids);
    if (formData.page) params = params.append('page', formData.page);
    if (formData.has_breeds)  params = params.append('has_breeds', formData.has_breeds);
    return this.http.get<ICatImage[]>(this.ROOT_URL, {params});
  }

  public getAllBreeds(): Observable<IBreeds[]> {
    return this.http.get<IBreeds[]>(this.BREEDS_URL);
  }

  public getCurrentCatByImageId(imageId: string): Observable<ICatImage> {
    return this.http.get<ICatImage>(`${this.CURRENT_IMG_URL}/${imageId}`);
  }
}
