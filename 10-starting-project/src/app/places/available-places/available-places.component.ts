import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  placesService = inject(PlacesService);
  isFetching = signal(false);
  error = signal('');
  private destroyRef = inject(DestroyRef);
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscribe = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => this.places.set(places),
      error: (error: Error) => this.error.set(error.message),
      complete: () => this.isFetching.set(false),
    });

    this.destroyRef.onDestroy(() => {
      subscribe.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subscribtion = this.placesService
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe({
        next: (res) => console.log(res),
      });
    this.destroyRef.onDestroy(() => {
      subscribtion.unsubscribe();
    });
  }
}
