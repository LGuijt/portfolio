const About = () => {
  return (
    <div className="content">
      <h1>About Me</h1>
      <div className="about-me">
        <p>
          My name is Lisa Guijt and I'm a 20 year old student from Leiden, the
          Netherlands. I'm currently studying at Grafisch Lyceum Utrecht and I'm
          in my second year of the webdevelopment course.
        </p>
        <p>On this website you can find some of my (school) projects.</p>
        <p>
          In my free time, I love creating things. While I write and paint on
          occasion and I've recently started dabbling in digital art, simple
          pencil sketching is what I enjoy most.
        </p>
        <p>
          Feel free to contact me if you have any questions or if you'd like to
          work together.
        </p>
        <p>
          You can check out my art on <a href="">my Instagram.</a>
        </p>
        <p className="links">
          <a href="mailto:mail.lisageurts@gmail.com">Send me an email</a>
          <a href="tel:+31643117150">or give me a call</a>
        </p>
      </div>
    </div>
  );
};
export default About;
