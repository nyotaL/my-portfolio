// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.gson.Gson;
import com.google.sps.data.Comment;
import com.google.sps.data.CommentIdentity;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet responsible for listing tasks. */
@WebServlet("/com-data")
public class CommentsServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    Query query = new Query("Comment").addSort("timestamp", SortDirection.DESCENDING);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    List<Comment> comments = new ArrayList<>();
    for (Entity entity : results.asIterable()) {
      long id = entity.getKey().getId();
      String title = (String) entity.getProperty("title");
      long timestamp = (long) entity.getProperty("timestamp");
      String user = (String) entity.getProperty("user");
      String rate = (String) entity.getProperty("rate");
      String email = (String) entity.getProperty("email");

      Comment comment = new Comment(id, title, timestamp, user, rate, email);
      comments.add(comment);
    }

    UserService userService = UserServiceFactory.getUserService();
    String email = userService.getCurrentUser().getEmail();
    CommentIdentity commentIdentity = new CommentIdentity(comments, email);

    Gson gson = new Gson();

    response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(commentIdentity));
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    UserService userService = UserServiceFactory.getUserService();

    // Only logged-in users can post messages
    if (!userService.isUserLoggedIn()) {
      response.sendRedirect("/index.html");
      return;
    }

    String title = request.getParameter("title");
    long timestamp = System.currentTimeMillis();
    String user = request.getParameter("user");
    String rate = request.getParameter("rating");
    String email = userService.getCurrentUser().getEmail();

    Entity commentEntity = new Entity("Comment");
    commentEntity.setProperty("title", title);
    commentEntity.setProperty("timestamp", timestamp);
    commentEntity.setProperty("user", user);
    commentEntity.setProperty("rate", rate);
    commentEntity.setProperty("email", email);


    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(commentEntity);

    response.sendRedirect("/feedback.html");
  }
}