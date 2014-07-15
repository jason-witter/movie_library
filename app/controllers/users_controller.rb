class UsersController < ApplicationController
  before_action :signed_in_user,  only: [:edit, :update]
  before_action :correct_user,   only: [:edit, :update]

  def show
  	@user = User.find(params[:id])
    @movies = @user.movies
    @wishlist_movies = get_wishlist_movies
    @movienight_movies = get_movienight_movies
  end

  def new
  	@user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in @user
      flash[:success] = "Welcome to the Sample App!"
      redirect_to movies_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @user.update_attributes(user_params)
      redirect_to movies_path
    else
      render 'edit'
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :password,
                                   :password_confirmation)
    end

    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless current_user?(@user)
    end
end
