import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { map, catchError, throwError, Subscription } from 'rxjs';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  // places = signal<Place[] | undefined>(undefined);
  private placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces;
  isFetching = signal(false);
  httpClient = inject(HttpClient);
  error = signal('');
  private destoryRef = inject(DestroyRef);
  ngOnInit(): void {
    this.isFetching.set(true);
    const subscribe = this.placesService.loadUserPlaces().subscribe({
      // next: (place) => this.places.set(place),
      error: (error: Error) => this.error.set(error.message),
      complete: () => this.isFetching.set(false),
    });

    this.destoryRef.onDestroy(() => {
      subscribe.unsubscribe();
    });
  }

  onRemovePlace(place: Place) {
    const subscription = this.placesService.removeUserPlace(place).subscribe();

    this.destoryRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
