const {
  v4: uuidv4,
} = require("uuid");

function EnrollmentsDao(db) {
  function enrollUserInCourse(
    userId,
    courseId
  ) {
    const existing =
      db.enrollments.find(
        (enrollment) =>
          enrollment.user ===
            userId &&
          enrollment.course ===
            courseId
      );

    if (existing) {
      return existing;
    }

    const enrollment = {
      _id: uuidv4(),
      user: userId,
      course: courseId,
    };

    db.enrollments.push(
      enrollment
    );

    return enrollment;
  }

  function unenrollUserFromCourse(
    userId,
    courseId
  ) {
    db.enrollments =
      db.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user ===
              userId &&
            enrollment.course ===
              courseId
          )
      );
  }

  return {
    enrollUserInCourse,
    unenrollUserFromCourse,
  };
}

module.exports =
  EnrollmentsDao;