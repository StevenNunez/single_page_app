class Server < Sinatra::Base
  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end

  get '/:template' do
    if ['home', 'about', 'contact'].include?(params[:template])
      redirect "/##{params[:template]}"
    else
      pass
    end
  end

  post '/contact' do
    "Thanks for your message"
  end
end
