import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import { Family} from '../tree1/model/family'


@Injectable()
export class StorageService 
{

    public familyCollections:Family[]=[];

    constructor() {
    }

    public getFamilyCollection(){
        return this.familyCollections;
    }

    public setFamilyCollection(familyCollection: Family[]): void {
        this.familyCollections = familyCollection;
    }
    
}