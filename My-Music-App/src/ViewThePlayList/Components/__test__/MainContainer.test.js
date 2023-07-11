import React from "react";
import { render, screen } from "@testing-library/react";
import MainContainer from "../MainContainer";

describe("MainContainer component", () => {
  test("renders the main container with correct content", () => {
    render(<MainContainer />);

    const email = screen.getByText(/shevchuk@gmail.com/i);
    expect(email).toBeInTheDocument();

    const otherDetails1 = screen.getByText(/Here since: 22 June 2023/i);
    expect(otherDetails1).toBeInTheDocument();

    const otherDetails2 = screen.getByText(/Amount of playlists: 3/i);
    expect(otherDetails2).toBeInTheDocument();

    const playlistName = screen.getByText(/Mega Mix/i);
    expect(playlistName).toBeInTheDocument();

    const playlistContent = screen.getByText(
      /Good for training’s and so on.../i
    );
    expect(playlistContent).toBeInTheDocument();

    const createdText = screen.getByText(/Created: 23 June 2023/i);
    expect(createdText).toBeInTheDocument();

    const updatedText = screen.getByText(/Updated: 12 Jul 2023/i);
    expect(updatedText).toBeInTheDocument();

    const dislikeCount = screen.getByText(4);
    expect(dislikeCount).toBeInTheDocument();

    const likeCount = screen.getByText(/1234/i);
    expect(likeCount).toBeInTheDocument();

    const addSongText = screen.getByText(/Add Song/i);
    expect(addSongText).toBeInTheDocument();

    const songsList = screen.getByTestId("song-list");
    expect(songsList).toBeInTheDocument();

    const commentSection = screen.getByTestId("comment-section");
    expect(commentSection).toBeInTheDocument();
  });
});
