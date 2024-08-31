
import { createServer, Factory, Model } from "miragejs";
import uuid from "react-uuid";

export default function server({ environment = "development" } = {}) {
    let server = createServer({
        environment,
        models: {
            notes: Model,
        },

        seeds(server) {
            server.create("note", {
                title: "note book one",
                body: "note book one body",
                date: new Date("July 30, 2024 01:15:00"),
                id: uuid(),
                type: "text"
            });
            server.create("note", {
                title: "note book two",
                body: "note book two body",
                date: new Date("July 28, 2024 01:15:00"),
                id: uuid(),
                type: "text"
            });
            server.create("note", {
                title: "note book three",
                body: "note book three body",
                date: new Date("July 24, 2024 01:15:00"),
                id: uuid(),
                type: "text"
            });
            server.create("note", {
                title: "note book four",
                body: "note book four body",
                date: new Date("July 21, 2024 01:15:00"),
                id: uuid(),
                type: "text"
            });
            server.create("note", {
                title: "note book five",
                body: "note book five body",
                date: "Aug 15, 2024, 05:40",
                id: uuid(),
                type: "text"
            });
        },
        routes() {
            this.namespace = "api/notes"
            this.get("/", (schema, request) => {
                return schema.notes.all()
            });
            this.get("/:id", (schema, request) => {
                let id = request.params.id;
                return schema.notes.find(id);
            });
            this.post("/", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                return schema.notes.create(attrs);
            });
            this.patch("/:id", (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody);
                let id = request.params.id;
                let note = schema.uonotes.find(id);
                return note.update(newAttrs);
            });
            this.delete("/:id", (schema, request) => {
                let id = request.params.id;
                return schema.notes.find(id).destroy();
            })
        }
    })

    return server;
}