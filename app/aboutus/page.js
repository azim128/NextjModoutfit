import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-8 py-6">
          <h1 className="text-3xl font-bold text-indigo-700">About Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-8 py-6">
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-indigo-700 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor eleifend ligula, non fringilla massa
            consectetur sit amet. Curabitur eu lacus vitae nisl cursus vehicula vel vitae neque. Fusce ut mi tellus.
            Proin varius auctor libero vel mattis. Integer a nulla vel tellus posuere euismod. Nullam rhoncus commodo
            semper. Proin feugiat lectus ut lorem varius, eget vulputate velit aliquam. Donec vel varius diam. Integer
            nec sem lorem. Integer consequat, massa id interdum mollis, massa est lacinia arcu, a commodo nunc augue
            sed elit. Nulla facilisi.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Suspendisse potenti. Mauris tincidunt ex eu ex semper, vitae luctus sem lacinia. Nullam elementum turpis
            in leo faucibus fermentum. Integer ac lacinia nisl. Maecenas tempus nisl eu augue congue fringilla. Fusce
            nec orci vitae nisi elementum accumsan. Quisque venenatis, ex nec volutpat vulputate, neque enim ultricies
            est, vel aliquam sem ex vel nunc. Aenean in interdum diam. Aliquam nec nisl ut enim cursus commodo. Ut
            et malesuada tellus. Sed in ex tellus. Cras non eros semper, lobortis orci eu, efficitur dui. Phasellus
            at enim sollicitudin, ullamcorper eros sed, placerat ligula.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-indigo-700 mb-4">Our Team</h2>
          <div className="grid grid-cols-3 gap-4 w-full">
            
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col justify-center items-center">
                
                  <Image
                    src="/team-1.jpg"
                    alt="Team Member 1"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                
                <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                <p className="text-gray-700">Co-Founder</p>
              </div>
            

            
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col justify-center items-center">
                
                  <Image
                    src="/team-1.jpg"
                    alt="Team Member 1"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                
                <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                <p className="text-gray-700">Co-Founder</p>
              </div>
           
            
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col justify-center items-center">
                
                  <Image
                    src="/team-1.jpg"
                    alt="Team Member 1"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                
                <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                <p className="text-gray-700">Co-Founder</p>
              </div>
            

            {/* Add more team members here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
