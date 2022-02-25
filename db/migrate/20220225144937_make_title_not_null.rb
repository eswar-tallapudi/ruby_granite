class MakeTitleNotNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :tasks, :title, false, 1
  end
end
