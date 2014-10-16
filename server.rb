class Server < Sinatra::Base
  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end
