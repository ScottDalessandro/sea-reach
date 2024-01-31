import { groq } from "next-sanity";
import sanityClient from "./libs/sanity";

export async function getRooms() {
    return sanityClient.fetch(
        groq`*[_type = 'room']{
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