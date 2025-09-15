import { Router } from "express";
import authRoute from "./modules/auth/auth.route.js";
import userRoute from "./modules/users/user.route.js";
import movieRoute from "./modules/movies/movie.route.js";
import bannerRoute from "./modules/banners/banner.route.js";
import systemRoute from "./modules/systems/system.route.js";
import complexRoute from "./modules/complexes/complex.route.js";
import cinemaRoute from "./modules/cinemas/cinema.route.js";
import seatRoute from "./modules/seats/seat.route.js";
import showtimeRoute from "./modules/showtimes/showtime.route.js";
import bookingRoute from "./modules/bookings/booking.route.js";

const r = Router();

r.use("/auth", authRoute);
r.use("/users", userRoute);
r.use("/movies", movieRoute);
r.use("/banners", bannerRoute);
r.use("/systems", systemRoute);
r.use("/complexes", complexRoute);
r.use("/cinemas", cinemaRoute);
r.use("/seats", seatRoute);
r.use("/showtimes", showtimeRoute);
r.use("/bookings", bookingRoute);

export default r;
