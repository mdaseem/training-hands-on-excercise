import { CourseModel } from "../../models/courseModel";

export const getActualDiscountPrices = (cartCourses: CourseModel[]) => {
  let totalCount = 0;
  let actualTotalCount = 0;
  cartCourses?.forEach((item) => {
    totalCount += item.discountPrice;
    actualTotalCount += item.actualPrice;
  });
  return { totalCount, actualTotalCount };
};
