
package io.spring.image.demo.application;

import io.spring.image.demo.domain.entity.Image;
import io.spring.image.demo.domain.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/upload")
@Slf4j
@RequiredArgsConstructor
public class ImagesController {

    private final ImageService service;
    private final ImageMapper mapper;

    @PostMapping
    public ResponseEntity save(
            @RequestParam("file")  MultipartFile file,
            @RequestParam("name")String name,
            @RequestParam("tags") List<String> tags
    ) throws IOException {
        log.info("Recebendo tentativa de upload do arquivo: {}", file.getOriginalFilename());
        Image image = mapper.mapToImage(file, name, tags);
        Image savedImage =  service.save(image);
        URI imageUri = buildImageURL(savedImage);
        return ResponseEntity.created(imageUri).build();
    }

    private URI buildImageURL(Image image) {
        String imagePath = "/"+image.getId();
        return ServletUriComponentsBuilder
                .fromCurrentRequestUri()
                .path(imagePath)
                .build().toUri();
    }
}

