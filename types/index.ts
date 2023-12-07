import { ObjectId } from 'bson';
import mongoose from 'mongoose';

type arr = {
    trait_type: string;
    value: string;
}

type file = {
    type: string;
    uri: string;
}

type obj = {
    files: file[];
    category: string;
}

export type song = {
    _id: string;
    name: string;
    image: string;
    animation_url: string;
    attributes: arr[];
    properties: obj;
}