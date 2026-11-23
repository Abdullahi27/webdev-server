const EnrollmentsDao =
  require("./dao");

function EnrollmentRoutes(
  app,
  db
) {
  const dao =
    EnrollmentsDao(db);

  const enrollUserInCourse = (
    req,
    res
  ) => {
    const {
      userId,
      courseId,
    } = req.params;

    const enrollment =
      dao.enrollUserInCourse(
        userId,
        courseId
      );

    res.json(
      enrollment
    );
  };

  const unenrollUserFromCourse = (
    req,
    res
  ) => {
    const {
      userId,
      courseId,
    } = req.params;

    dao.unenrollUserFromCourse(
      userId,
      courseId
    );

    res.sendStatus(200);
  };

  app.post(
    "/api/users/:userId/courses/:courseId",
    enrollUserInCourse
  );

  app.delete(
    "/api/users/:userId/courses/:courseId",
    unenrollUserFromCourse
  );
}

module.exports =
  EnrollmentRoutes;