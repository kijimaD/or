FROM rust:1.80

RUN cargo install mdbook book-summary mdbook-toc
