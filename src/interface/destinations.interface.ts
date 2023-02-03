export interface Destination {
        name: string;
        slug: string;
        image: string;
        id: number;
        description: string;
        experiences: [
                {
                        name: string;
                        slug: string;
                        image: string;
                        description: string;
                }
        ];
}