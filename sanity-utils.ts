import sanityClient from "./src/libs/sanity";
import { groq } from "next-sanity";
import { Room } from "./types/Room";

export async function getRooms(): Promise<Room[]> {
    return sanityClient.fetch(
        groq`*[_type == 'room']{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            url,
            conent
        }`
    )
}