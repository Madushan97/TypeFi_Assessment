package com.madushan.TypeFiMiniApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    private LocalDateTime queuedTime;

    private String jobStatus;

    private String jobFolderPath;

    private String path;

    private String customer;

    private String name;

    private String owner;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "job_id")
    private List<LabelEntity> labels;

    private int duration;



}
