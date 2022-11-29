package fi.vamk.scm.server.repositories;

import fi.vamk.scm.server.entities.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Integer> {
}
