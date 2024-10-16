@extends('layout.layout')

@section('content')
    <div>
        <form action="{{route("album.store")}}" method="POST">
            @csrf
            <h2>New Album</h2>

            <div><label for="albumName">Album Name:</label> <br></div>
            <div><input type="text" id="albumName" name="Album name"> <br></div>

            <div><label for="releaseYear">Release year</label> <br></div>
            <div><input type="text" id="releaseYear" name="Release year"></div>

            <div><label for="artist">Artist</label></div>
            <div>
                <select type="text" id="artist" name="Selected artist">
                    <option for="Select">Select an Artist</option>
                    <option for="Drake">Drake</option>
                    <option for="Kendrick">Kendrick</option>
                    <option for="Tyler_the_creator">Tyler the creator</option>
                    <option for="ASAP">A$AP Rocky</option>
                </select>
            </div>

            <div><label>Type:</label></div>
            <div>
                <input type="radio" id="single" name="Type of release" value="Single">
                <label for="single">Single</label>
                <input type="radio" id="ep" name="Type of release" value="EP">
                <label for="ep">EP</label>
                <input type="radio" id="album" name="Type of release" value="Album">
                <label for="album">Album</label>
            </div>

            <div><label for="description">Description</label></div>
            <div><textarea id="description" name="Description" placeholder="Write here"></textarea></div>

            <div>
                <label for="tracks">Tracks</label> <br>
            </div>

            <div id="tracks">
                <div id="track0">
                    <input type="text" id="tracks" name="The track">
                </div>
            </div>


            <div>
                <button type="button" id="addButton">Add +</button>
            </div>

            <div>
                <button type="submit" id="submitButton">Submit</button>
            </div>
        </form>
    </div>
@endsection
