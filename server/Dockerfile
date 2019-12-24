FROM golang:latest as builder

WORKDIR /usr/server
COPY . /usr/server

RUN CGO_ENABLED=0 GOOS=linux GOPROXY=https://proxy.golang.org go build -o server main.go


FROM alpine:latest as runner

WORKDIR /usr/server
COPY --from=builder /usr/server /usr/server

EXPOSE 4000
CMD ["./server"]
