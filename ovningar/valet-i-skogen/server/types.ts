export interface Resource {
	id: string;
}
export interface Election extends Resource {
	name: string;
}

export interface Animal extends Resource {
	name: string;
	image: string;
}

export interface Vote extends Resource {
	animal: Animal["id"];
	election: Election["id"];
}
