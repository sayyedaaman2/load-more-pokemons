import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
describe("HelloWorld Component", () => {
    it("Render Component", async () => {
        const HelloWorld = () => {
            return <p>Hello, World</p>;
        };

        render(<HelloWorld />);

        expect(await screen.findByText("Hello, World")).toBeInTheDocument();
    });

    it("Render Component with props", () => {
        const HelloWorld = ({ name }) => {
            return <h1>Hello, {name}</h1>;
        };

        render(<HelloWorld name={"Aaman"} />);

        expect(screen.getByRole('heading')).toHaveTextContent("Hello, Aaman");
    });

    it("Render loading state", () => {
        const HelloWorld = ({ isLoading }) => {
            if (isLoading) {
                return <h1>Loading...</h1>;
            }
            return <h1>Hello, World</h1>;
        };

        render(<HelloWorld isLoading={true} />);

        expect(screen.getByRole('heading')).toHaveTextContent("Loading...");
    });

    it("Render with data", () => {
        const HelloWorld = ({ data }) => {
            if (!data) {
                return <h1>Loading...</h1>;
            }
            return (
                <div>
                    <p>Id: {data.id}</p>
                    <p>Name: {data.name}</p>
                    <p>Title: {data.title}</p>
                </div>
            );
        };

        const mockData = { id: 1, name: "Aaman", title: "Developer" };

        render(<HelloWorld data={mockData} />);

        expect(screen.getByText(/Id: 1/)).toBeInTheDocument();
        expect(screen.getByText(/Name: Aaman/)).toBeInTheDocument();
        expect(screen.getByText(/Title: Developer/)).toBeInTheDocument();
    });
});