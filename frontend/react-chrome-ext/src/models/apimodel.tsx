export interface userValues{ //for the user's profile info
    userName_first: string,
    userName_list: string,
    user_email: string,
    user_id: number,
}



export interface preferences{
    media_id: number,
    media_name: string,
    preference_id: number,
    user_id: number,
    pref_name: string,
}

export interface articleValues{
    user_id: number,
    media_id: number,
    link: string,
    media_name: string,
    media_type_id: string
}