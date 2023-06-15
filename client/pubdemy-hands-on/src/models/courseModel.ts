export class CourseModel {
    constructor(
      public id: number = 0,
      public title: string = "",
      public trainerName: string = "",
      public rating: number = 0,
      public specialStatus:string = '',
      public totalRating: number = 0,
      public actualPrice: number = 0,
      public discountPrice: number = 0,
      public imageUrl: string = "",
    //   public avatarUrl: string = "",
    //   public description: string = "",
    ) {}
  }
  