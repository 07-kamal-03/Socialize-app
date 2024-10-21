package com.facebook.fbackend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "posts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostEntity {

    @Id
    @GeneratedValue(generator = "uuid");
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Lob
    private String post;
    @Lob
    private String image;
    private String timeStamp;

}
