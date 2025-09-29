export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  gender?: null;
  dob?: null;
  email_verified_at: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
};

export type AuthResponse = {
  data: {
    user: User;
    access_token: string;
    refresh_token: string;
  };
};

export type Expertise = {
  id: string;
  title: string;
  desc: string;
};

export type Recommendations = {
  id: string;
  name: string;
  image: string;
  designation: string;
  view: string;
  linkednURL: string;
};

export type Reviews = {
  id: string;
  clientName: string;
  clientLocation: string;
  clientSource: string;
  clientReview: string;
};

export type Edu = {
  id: string;
  title: string;
  degree: string;
  detail: string;
  year: string;
};
export type Exp = {
  id: string;
  title: string;
  role: string;
  url: string;
  desc: string;
  year: string;
  location: string;
};

export type Background = {
  eduCards: Edu[];
  expCards: Exp[];
};
