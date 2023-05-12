package com.madushan.TypeFiMiniApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class LabelEntity {

        @Id
        private Long id;
        private String name;
        private String owner;
        private LocalDateTime created;

}
