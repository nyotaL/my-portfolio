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
import java.io.PrintWriter;
import com.google.gson.Gson;
import com.google.sps.data.Comment;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet responsible for listing tasks. */
@WebServlet("/login_page")
public class LoginServlet extends HttpServlet {

  private String loginStatus = "false";

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");
    PrintWriter out = response.getWriter();

    // Only logged-in users can see the form
    UserService userService = UserServiceFactory.getUserService();
    if (userService.isUserLoggedIn()) {
      loginStatus = "true";
      String userEmail = userService.getCurrentUser().getEmail();
      String urlToRedirectToAfterUserLogsOut = "/index.html";
      String logoutUrl = userService.createLogoutURL(urlToRedirectToAfterUserLogsOut);
      String message_1 = "<p>Hello " + userEmail + "!</p>" 
           + "<p>Logout <a href=\"" + logoutUrl + "\">here</a>.</p>";
      List<String> pair_1 = new ArrayList<String>();
      pair_1.add(loginStatus);
      pair_1.add(message_1);

      Gson gson = new Gson();
      out.println(gson.toJson(pair_1));
      //out.println("<p>Hello " + userEmail + "!</p>");
      //out.println("<p>Logout <a onclick=\"hide()\" href=\"" + logoutUrl + "\">here</a>.</p>");
    } else {
      loginStatus = "false";
      String loginUrl = userService.createLoginURL("/index.html");
      String message_2 = "<p>Login <a href=\"" + loginUrl 
            + "\">here</a>.</p>";
      List<String> pair_2 = new ArrayList<String>();
      pair_2.add(loginStatus);
      pair_2.add(message_2);

      Gson gson = new Gson();
      out.println(gson.toJson(pair_2));
      //out.println("<p>Login <a href=\"" + loginUrl + "\">here</a>.</p>");
      //out.println
    }
  }
}