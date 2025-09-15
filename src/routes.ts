import { Router } from "express";
import authRoute from "./modules/auth/auth.route";
import userRoute from "./modules/users/user.route";
import movieRoute from "./modules/movies/movie.route";
import bannerRoute from "./modules/banners/banner.route";
import systemRoute from "./modules/systems/system.route";
import complexRoute from "./modules/complexes/complex.route";
import cinemaRoute from "./modules/cinemas/cinema.route";
import seatRoute from "./modules/seats/seat.route";
import showtimeRoute from "./modules/showtimes/showtime.route";
import bookingRoute from "./modules/bookings/booking.route";

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
