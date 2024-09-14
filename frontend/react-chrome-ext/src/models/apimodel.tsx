export interface UserValues{ //for the user's profile info
    userName_first: string,
    userName_last: string,
    user_email: string,
    user_id: number,
}

export interface Preferences{ //options
    media_id: number,
    media_name: string,
    preference_id: number,
    user_id: number,
    pref_name: string,
}

export interface ArticleValues{ //notifs page
    user_id: number,
    media_id: number,
    link: string,
    media_name: string,
    media_type_id: number
    media_img: string; //demo the path
}


