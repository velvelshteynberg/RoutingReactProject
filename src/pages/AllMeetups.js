import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetupus] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch("https://routingreactproject-default-rtdb.firebaseio.com/meetups/-MpMXWuYr0wakq4XDrq1.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetupus(meetups);
                
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p> Loading...</p>
            </section>
        );
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;
