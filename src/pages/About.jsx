import './../styles/About.css';

function About() {

    return (
        <div data-page="about">
            <div className="container">
                <h1>About EasyBusi</h1>
                <p>
                    Welcome to <strong>EasyBusi</strong>, a web application designed to empower businesses and individuals alike with a platform to manage and showcase business cards seamlessly.
                </p>

                <h2>Our Mission</h2>
                <p>
                    Our mission is to simplify the way you create, edit, and manage your business identity. Whether you're an entrepreneur, a freelancer, or a company representative, EasyBusi is tailored to meet your needs with efficiency and ease.
                </p>

                <h2>Who Is This For?</h2>
                <ul>
                    <li>Entrepreneurs looking to establish their brand.</li>
                    <li>Freelancers who need to quickly share professional details.</li>
                    <li>Businesses aiming to streamline their networking process.</li>
                </ul>

                <h2>Key Features</h2>
                <ul>
                    <li>Dynamic business card creation with customizable fields.</li>
                    <li>Seamless editing and deletion of cards.</li>
                    <li>Favorites feature to highlight important cards.</li>
                    <li>Google Maps integration to display business locations.</li>
                    <li>Secure authentication with JWT for user privacy.</li>
                    <li>Responsive design for use on any device.</li>
                </ul>

                <p>
                    Start using EasyBusi today and take control of your professional presence with a few simple clicks. Join a growing community of users who trust EasyBusi for their business needs.
                </p>
            </div>
        </div>
    );
};

export default About;