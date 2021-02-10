import { Item } from './item';

export interface FlickerResponse {
    id: string;
    owner: string;
    ownername: string;
    photo: Item[];
}
