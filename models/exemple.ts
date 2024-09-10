export class Exemple{
    constructor(public title: string,
                public imageUrl: string, 
                public description: string,
                public createdAt: Date,
                public likes: number){

                }
                addlike():void {
                    this.likes++;
                  }
}