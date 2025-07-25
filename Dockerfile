FROM rust:1.87.0 AS app

RUN cargo install mdbook mdbook-toc
